import { ClientFooter } from "~/app/_components/ClientsFooter"
export default function BlogsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative h-screen w-full">
      {children}
      <ClientFooter/>
    </main>
 
  )
}