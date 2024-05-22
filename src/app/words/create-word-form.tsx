'use client'

import { createWordAction } from "@/actions"
import { useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";

export default function CreateTodoForm() {
  const ref = useRef<HTMLFormElement>(null)
  const initialState = { message: "" }
  const [state, formAction] = useFormState(createWordAction, initialState)

  return <form action={async formData => {
    await formAction(formData)
    ref.current?.reset()
  }} ref={ref}>
    <input type="text" name="wordText" placeholder="Write a word" className="mb-5" />
    <div className="">
      {state.message}
    </div>
  </form>
}