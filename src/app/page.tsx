
import { listWords } from "@/db"
import { currentUser } from "@clerk/nextjs/server"

export default async function Home() {
  const words = (await listWords()).reverse()

  const user = await currentUser()
  const username = user ? `, ${user.username}` : ''

  return (
    <div>
      <h1>Welcome{username} 👋</h1>
      <p>Word Warehouse is your personal vocabulary expansion tool. It's a unique platform where you can store, remember, and learn new words every day. Enhance your language skills and build a rich word vault right here. Dive in, discover more, and make your language journey more exciting with us!</p>
      <h2>Some recent words from all users for you to peruse</h2>
      <ul>
        {words.map(word => <li>{word}</li>)}
      </ul>
    </div>
  )
}
