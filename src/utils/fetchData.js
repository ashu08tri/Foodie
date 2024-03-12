const {NEXT_PUBLIC_API_URL} = process.env;

export async function getMenuData(){
    let res = await fetch(`${NEXT_PUBLIC_API_URL}/api/categories`);
    res = await res.json();
    return res.result; 
  }

export async function getFeaturedData(){
  let res = await fetch(`${NEXT_PUBLIC_API_URL}/api/featured`);
  res = await res.json();
  return res.result; 
}