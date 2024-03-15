import { NextResponse } from 'next/server';
import { getAuthSession } from './utils/auth';
 
export async function middleware(request) {
const session = await getAuthSession();
if(!session){
    return NextResponse.redirect(new URL('/login', request.url))
}
}
 
export const config = {
  matcher: '/order',
}