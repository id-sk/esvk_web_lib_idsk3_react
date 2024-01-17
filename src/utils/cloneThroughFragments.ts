import React from 'react';

export function cloneThroughFragments(
  children: React.ReactNode,
  customCloneFn: (child: React.ReactNode) => React.ReactNode
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const isFragment = child.type === React.Fragment;
    if (isFragment) {
      return cloneThroughFragments(child.props.children, customCloneFn);
    }

    return customCloneFn(child);
  });
}
