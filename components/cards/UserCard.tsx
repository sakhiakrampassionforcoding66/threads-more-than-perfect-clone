"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Props {
id: string;
name: string;
username: string;
imgUrl: string;
personType: string;
}

function UserCard({
  id,
  name,
  username,
  imgUrl,
  personType,
}: Props) {
  const router = useRouter();

  // If personType is "Community" then button should lead to community page
  const linkTo = personType === "Community" ?
    `/communities/${id}` :
    `/profile/${id}`;

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image
          src={imgUrl}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>

      <div className="flex-1 text-ellipsis">
        <h4 className="text-base-semibold text-light-1">
          {name}
        </h4>
        <p className="text-small-medium text-gray-1">@{username}</p>
      </div>

      <Button className="user-card_btn" onClick={() => router.push(linkTo)}>
        View
      </Button>
    </article>
  )
}

export default UserCard;