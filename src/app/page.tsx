
import { listWords } from "@/db"
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const words = (await listWords()).reverse()
  const user = await currentUser()

  const username = user ? `, ${user.username}` : ''

  return (
    <div>

      <h1 className="text-4xl py-5">Welcome{username} 👋!</h1>
      <h2 className="text-xl pb-5">Some recent words from all users for you to peruse</h2>
      <ul>
        {words.map(word => <li>{word}</li>)}
      </ul>
    </div>
  );
}
