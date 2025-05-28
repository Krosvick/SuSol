import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware simple que permite acceso público a todas las rutas
// Esto elimina el bloqueo de Clerk que impedía la indexación de Google
export function middleware(request: NextRequest) {
  // Permitir acceso a todas las rutas sin autenticación
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};