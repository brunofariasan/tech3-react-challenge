import React from 'react';
import Link from 'next/link';
import { Container, Crumb, Separator } from './styled';

type CrumbType = {
  label: string;
  href?: string;
};

type Props = {
  crumbs: CrumbType[];
};

export default function BreadcrumbNav({ crumbs }: Props) {
  return (
    <Container>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <Crumb key={index}>
            {crumb.href && !isLast ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {!isLast && <Separator>/</Separator>}
          </Crumb>
        );
      })}
    </Container>
  );
}
