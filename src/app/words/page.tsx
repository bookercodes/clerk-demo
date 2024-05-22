import { listWordsBy } from '@/db'
import CreateWordForm from './create-word-form'
import { currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  const user = await currentUser()

  if (!user) return

  const words = await listWordsBy(user.id)

  return <div>
    <h2 className="text-xl pb-5">Recent words by you, {user.username}</h2>
    <p className='text-xs pb-5'>
      Fill your Warehouse - one word at a time. Use this page to submit a new word, store it in your personal warehouse, and remember it forever.
    </p>
    <ul className='pb-5'>
      {words.map(word => <li>{word}</li>)}
    </ul>
    <CreateWordForm />
    <p>Delete all words</p>
  </div>
}