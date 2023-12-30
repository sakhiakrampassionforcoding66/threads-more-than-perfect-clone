import Link from "next/link";
import Image from "next/image";
import { formatDateString } from "@/lib/utils";
import DeleteThreadBtn from "../shared/DeleteThreadBtn";

interface Props {
  id: string;
  currentUserId: string;
  content: string;
  parentId: string | null;
  createdAt: Date;
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  author: {
    id: string;
    name: string;
    image: string;
  }
  comments: {
    author: {
      image: string;
    }
  }[]
  isComment?: boolean;
}

export default function ThreadCard({
  id,
  currentUserId,
  content,
  parentId,
  comments,
  createdAt,
  community,
  author,
  isComment = false
}: Props) {

  return (
    <article className={`flex flex-col w-full rounded-xl ${ isComment ? `px-0 xs:px-7` : `bg-dark-2 p-7 ` }`}>
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="author profile"
                fill
                className="cursor-pointer rounded-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>

            <div className="thread-card_bar" />
          </div>

          <div className="flex flex-col w-full">
            <div className="w-fit flex flex-row justify-between">
              <Link href={`/profile/${author.id}`} className="flex-4">
                <h4 className="cursor-pointer text-base-semibold text-light-1">{author.name}</h4>
              </Link>
              <DeleteThreadBtn id={JSON.stringify(id)} />
            </div>

            <p className="mt-2 text-small-regular text-light-2">
              {content}
            </p>

            <div className={`${ isComment && `mb-10`} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-3.5">
                <Image
                  src="/assets/heart-gray.svg" alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="reply"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  src="/assets/repost.svg"
                  alt="repost"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Image
                  src="/assets/share.svg"
                  alt="share"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />

                {isComment && comments.length > 0 && (
                  <Link href={`/thread/${id}`}>
                  <p className="mt-2 ml-6 text-subtle-medium text-gray-1">{comments.length} replies</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isComment && comments.length > 0 && (
        <p className="mt-2 ml-5 text-subtle-medium text-gray-1">
          {comments.length} {comments.length > 1 ? "replies" : "reply"}
        </p>
      )}
      {!isComment && community && (
        <Link href={`/communities/${community.id}`} className="mt-5 flex items-center">
          <p className="text-subtle-medium text-gray-1">
            {formatDateString(createdAt.toString())}
            {" "} - {community.name} Community
          </p>

          <Image
            src={community.image}
            alt={community.name}
            width={14}
            height={14}
            className="ml-1 rounded-full object-cover"
          />
        </Link>
      )}
    </article>
  )
}