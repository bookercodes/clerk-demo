'use server'

import { addWord } from "./db"
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from "next/cache"

export async function createWordAction(prevState: any, formData: any) {

  const wordText = formData.get("wordText")

  if (wordText === "") {
    return { message: 'Word cannot be empty.' }
  }

  const { userId } = auth()

  if (!userId) {
    return { message: 'You must be signed in.' }
  }

  addWord(userId, wordText)
  revalidatePath("/words")
  return { message: '' }
}

export async function deleteWords() {

}