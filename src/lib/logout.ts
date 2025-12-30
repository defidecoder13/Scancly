import { supabase } from "./supabase";
import { useRouter } from "next/navigation";


export async function logout(router?: any) {
    
    await supabase.auth.signOut();
  
    if (router) {
      router.push("/login"); // or "/"
    }
  }