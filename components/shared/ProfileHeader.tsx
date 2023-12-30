import Image from "next/image";
import EditButton from "./Edit";

interface Props {
  accountId: string;
  authId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?:string;
}

export default function ProfileHeader({
  accountId,
  authId,
  name,
  username,
  imgUrl,
  bio,
  type
}: Props) {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex justify-between relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="Profile Image"
              fill
              className="rounded-full object-cover shadow-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-heading3-bold text-left text-light-1">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>
        <EditButton type="User" />
      </div>

        {/* TODO community implementation */}
        <p className="mt-6 max-w-lg text-base-regular text-light-2">
          {bio}
        </p>

        <div className="mt-12 h-0.5 w-full bg-dark-3" />
        
    </div>
  )
}