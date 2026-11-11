export default function Content() {
  // Capture the time at render so the greeting reflects the latest page visit.
  const currentTime = new Date().toLocaleTimeString()

  // Display the home/create page heading and its current time.
  return (
    <main className="container py-4">
      <h1>Hello World!</h1>
      <h2>It is {currentTime}.</h2>
    </main>
  )
}