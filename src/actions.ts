'use server'

import { revalidatePath } from "next/cache"

export async function createWordAction(prevState: any, formData: any) {

  const wordText = formData.get("wordText")

  if (wordText === "") {
    return { message: 'Word cannot be empty.' }
  }

  // TODO add word


  revalidatePath("/words")
  return { message: '' }
}