// "use client"

// import React, {useEffect,useState} from 'react'
// import ClientOnly from './ClientOnly'


// export default function AllOverlays() {
  
//     const [isClient, setIsClient] = useState(false)
//    useEffect(()=> {setIsClient(true),[]})

 
//     return (
//   <>
  
//     <ClientOnly>
      
//     </ClientOnly>
//   </>
//   )
// }

"use client"

import { useGeneralStore } from "../stores/general";
import AuthOverlay from "./AuthOverlay";
import EditProfileOverlay from "./profile/EditProfileOverlay";
import ClientOnly from "./ClientOnly";

export default function AllOverlays() {
    let { isLoginOpen, isEditProfileOpen } = useGeneralStore();
    return (
        <>
            <ClientOnly>
                {isLoginOpen ? <AuthOverlay/> : null}
                {isEditProfileOpen ? <EditProfileOverlay /> : null}
            </ClientOnly>
        </>
    )
}