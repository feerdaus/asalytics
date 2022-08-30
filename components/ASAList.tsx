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

  if (error) {
    return <div className="error">Oops! An error has occured</div>;
  }

  return (
    <div className="flex">
      {data?.asalist?.result &&
        data.asalist.result.map((item, index) => (
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
