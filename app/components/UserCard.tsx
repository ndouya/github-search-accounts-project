import { GithubUser } from "@/types/github";

interface Props {
  user: GithubUser;
}

export default function UserCard({ user }: Props) {
  const joinedDate = new Date(
    user.created_at
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="mt-6 rounded-2xl bg-[#1F2A48] p-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="h-28 w-28 rounded-full"
        />

        <div className="flex-1">
          <div className="flex flex-wrap justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {user.name || user.login}
              </h2>

              <p className="text-blue-400">
                @{user.login}
              </p>
            </div>

            <p>Joined {joinedDate}</p>
          </div>

          <p className="mt-4 text-gray-300">
            {user.bio || "No bio available"}
          </p>

          <div className="mt-6 grid grid-cols-3 rounded-xl bg-[#141D2F] p-5">
            <div>
              <p>Repos</p>
              <h3 className="text-xl font-bold">
                {user.public_repos}
              </h3>
            </div>

            <div>
              <p>Followers</p>
              <h3 className="text-xl font-bold">
                {user.followers}
              </h3>
            </div>

            <div>
              <p>Following</p>
              <h3 className="text-xl font-bold">
                {user.following}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}