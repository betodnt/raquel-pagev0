import { IoMailOutline, IoLogoGithub } from 'react-icons/io5'
import Link from 'next/link'
// import { Separator } from '@/components/ui/separator'

export default function Component() {
  return (
    <footer className="bg-muted p-6 md:py-8 w-full mt-10">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Contato</h3>
          <div className="flex items-center gap-2">
            <IoMailOutline className="w-5 h-5 text-muted-foreground" />
            <Link
              href="mailto:dentgm@gmail.com"
              className="hover:underline"
              target="_blank"
            >
              dentgm@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <IoLogoGithub className="w-5 h-5 text-muted-foreground" />
            <Link
              href="https://github.com/betodnt"
              className="hover:underline"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="grid gap-1">
          <h3 className="font-semibold">Copyright</h3>
          <p className="text-muted-foreground">
            &copy; 2024 Roberto Sabino. Todos os direitos reservados.
          </p>
          {/* <div className="flex items-center gap-2">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
