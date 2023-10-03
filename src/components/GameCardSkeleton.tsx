import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}
