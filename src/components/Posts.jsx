import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import moment from "moment";
import { dummyUserData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Posts = ({post}) => {
  const navigate=useNavigate();
    const currentuser=dummyUserData
    const postwithhastags=post.content.replace(/(#[A-Za-z0-9_]+)/g,'<span class="text-primary">$1</span> ')
  return (
    <div className="w-full bg-white flex flex-col gap-4 rounded-xl shadow-md p-5 border border-neutral-200">
        {/* user_card */}
      <div className="hover:cursor-pointer flex gap-3 justify-start items-center" onClick={()=>{navigate(`/profile/${post.user._id}`)}}> 
        <img className="size-10 rounded-4xl" src={post.user.profile_picture} alt="" />
        <div className="flex flex-col leading-tight">
            <h1 className="text-black/80 text-md flex  justify-start items-center gap-1">{post.user.full_name} <BadgeCheck className="size-5 text-primary"/> </h1>
            <p className="text-sm text-neutral-400 flex items-center gap-1">@{post.user.username}•{moment(post.createdAt).fromNow()} </p>
        </div>
      </div>
      {/* content */}
      <div >
        <h1 className="w-full text-wrap font-light whitespace-pre-line" dangerouslySetInnerHTML={{__html:postwithhastags}}></h1>
      </div>
      {/* mediax */}
      <div className="">
        {post.image_urls.map((image,idx)=>{
            return <img src={image} key={idx} />
        })}
      </div>
      <hr className="text-gray-400" />
      <div className="flex justify-start items-center gap-4 text-neutral-500 size-5">
        <div className="flex justify-center items-center gap-1"><Heart className={`size-6 ${post.likes_count.includes(currentuser._id)?"fill-red-500 text-red-500":"x"}`} /> <h1 className="text-2xl">{post.likes_count.length}</h1></div>
        <div className="flex justify-center items-center gap-1"><MessageCircle className="size-5" /><h1 className="text-2xl">12</h1> </div>
        <div className="flex justify-center items-center gap-1"><Share2 className="size-5" /><h1 className="text-2xl">7</h1></div>
      </div>
    </div>
  );
};

export default Posts;
