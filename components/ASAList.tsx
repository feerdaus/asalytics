import { FC } from "react";
import ASACard from "./ASACard";
import Skeleton from "./Skeleton";
import graphqlClient from "@graphql/client";
import { AsaListQuery, useAsaListQuery } from "@graphql/generated";

const ASAList: FC = () => {
  const { data, isLoading, error } = useAsaListQuery<AsaListQuery, Error>(
    graphqlClient,
    {}
  );

  if (isLoading) {
    return (
      <div className="flex">
        {Array.from(Array(12)).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      {data?.asalist?.results &&
        data.asalist.results.map((item, index) => (
          <ASACard
            key={`${item.name}-${index}`}
            logo={item.logo}
            name={item.name}
            available={item.available}
          />
        ))}
    </div>
  );
};

export default ASAList;
