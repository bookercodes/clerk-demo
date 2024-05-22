import CreateWordForm from '@/components/create-word-form'

export default async function Home() {

  return (
    <div>
      <h2>Recent words by you</h2>
      <p>
        Fill your Warehouse - one word at a time. Use this page to submit a new word, store it in your personal warehouse, and remember it forever.
      </p>

      <ul>

      </ul>

      <CreateWordForm />
    </div>
  )
}