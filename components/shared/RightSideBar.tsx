import { fetchCommunities } from "@/lib/actions/community.actions";
import UserCard from "../cards/UserCard";

export default async function RightSideBar() {
  const result = await fetchCommunities({
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1 mb-5">Suggested Communities</h3>
        {result?.communities?.map((community) => (
          <div className="mb-6">
            <UserCard
              key={community.id}
              id={community.id}
              name={community.name}
              username={community.username}
              imgUrl={community.image}
              personType="Community"
            />
          </div>
        ))}
      </div>
    </section>
  )
}