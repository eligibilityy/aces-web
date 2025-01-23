import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="card w-full bg-gray-200 dark:bg-gray-700 p-4 mb-4 rounded-md">
      <div className="flex mb-4 gap-4">
        {/* Avatar Skeleton */}
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      {/* Description Skeleton */}
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
