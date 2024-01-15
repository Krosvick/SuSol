import { NavbarAdmin } from "../_components/NavbarAdmin"
export default function adminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <NavbarAdmin/>
    <main >
        {children}
    </main>
    </>
  )
}