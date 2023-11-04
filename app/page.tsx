
"use client"
import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
  <>
  <MainLayout>
    <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">

      <ClientOnly >

        <PostMain
          post={{
            id:'123',
            user_id:'456',
            video_url:'/beach.mp4',
            text:' this is some text',
            created_at:' date here',
            profile:{
              user_id:'456',
              name:'1',
              image:'https://placehold.co/100'
            }
          }}
        />
      </ClientOnly>
    </div>
  </MainLayout>
  </>
  )
}
