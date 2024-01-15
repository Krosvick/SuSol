import { NavbarClient } from "../_components/NavbarClient"

export default function ClientsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <NavbarClient/>
    {children}
    </>
 
  )
}