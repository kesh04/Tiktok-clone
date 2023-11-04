import { Comment, Like, PostMainLikesCompTypes } from "../types";
import { useState } from "react";
import { FaShare, FaCommentDots } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
export default function PostMainLikes({ post }: PostMainLikesCompTypes) {
  const [likes, setLikes] = useState<Like[]>([]);
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([]);
  const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);
  const likeOrUnlike = () => {
    // if (!contextUser?.user?.id) {
    //     setIsLoginOpen(true)
    //     return
    // }

    // let res = useIsLiked(contextUser?.user?.id, post?.id, likes)

    // if (!res) {
    //     like()
    // } else {
    //     likes.forEach((like: Like) => {
    //         if (contextUser?.user?.id == like?.user_id && like?.post_id == post?.id) {
    //             unlike(like?.id)
    //         }
    //     })
    // }
    console.log("likeorunlke");
  };
  return (
    <>
      <div id={`PostMainLikes-${post?.id}`} className="relative mr-[75px]">
        <div className="absolute bottom-0 pl-2">
          <div className="pb-4 text-center">
            <button
              disabled={hasClickedLike}
              onClick={() => likeOrUnlike()}
              className="rounded-full bg-gray-200 p-2 cursor-pointer"
            >
              {!hasClickedLike ? (
                <AiFillHeart
                  color={likes?.length > 0 && userLiked ? "#ff2626" : ""}
                  size="25"
                />
              ) : (
                <BiLoaderCircle className="animate-spin" size="25" />
              )}
            </button>
            <span className="text-xs text-gray-800 font-semibold">
              {likes?.length}
            </span>
          </div>

          <button
            onClick={() =>
              router.push(`/post/${post?.id}/${post?.profile?.user_id}`)
            }
            className="pb-4 text-center"
          >
            <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
              <FaCommentDots size="25" />
            </div>
            <span className="text-xs text-gray-800 font-semibold">
              {comments?.length}
            </span>
          </button>

          <button className="text-center">
            <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
              <FaShare size="25" />
            </div>
            <span className="text-xs text-gray-800 font-semibold">55</span>
          </button>
        </div>
      </div>
    </>
  );
}
