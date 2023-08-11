import React from 'react';

export const ICExpense = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox={`0 0 ${props.width} ${props.height}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={props.width} height={props.height} fill="url(#icExpanse)" />
      <defs>
        <pattern
          id="icExpanse"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_20_30" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_20_30"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVR4nO2cvW7UQBRGTwMUIGpQKJAQlIQKEgokfl4GEpCSJyFQEV4lEUqTIIgEFdCHCiEKEomlGjTSFBQZe722596MvyPdbuX1nHz5bK93DUIIIYQQQgghspwH1oAD4AQIRhPfex94BpyjMq4Ch4Zyc/MRuEJFST50IDU3H2pJ9poDmW3zlAp470Bk28TOPvMcOxDZNr+pgJCZMbY5z/bH2B8XBImW6OA10Q+BbeDrKRcdOZToDtwAdh11Yqixo+8DP50tLDjbn95cB344XFhwtj+92elwLppDolt41EGyRPdgOyP0D7BR06de1nzLiI6SRYHPKJTkgcl1sUQXEr059BtNndBwMNxMt6fEAISJzUm6SfECuDCEQImmVfpn4JpEU0x2kWRb/ysHB/NcoikiOn7ZR4lmfNHxok2iKZNqiUaisT6IKdHYi1N1YC9VHY1EmycuKNGYS1J1YC9QHY2v0QULEo11CpVoyouKt95eAneBi2nuAVvATNXBIJKPgNsNJbucXqOOpl+SmyT/L7sp2ToY0iw61sW8vJJoFk507OR5WZFoFhZ9qYPo+FpVB+OLvizRqDq8z1aHRL9WollY9CydurVxB/gr0fRK9VGL7Cj5e8s2RidUMrN0nrySDpBxVlNdNCVZoin7h1KikWis60KJxl6cqgN7qepoJNo8cUGJxlySqgN7gW46+iw8Ri3UIDr3o/upzei8dbDI4GBG54mDRYapPOFxz8FiQ+0/f4vcAn45WHAwmnUK8mCisj+lZ18X5SbwbmKSlzDkMfAG+FLhefZxeo70ukWShRBCCCGEEEIIIXDIP3ZwyC2roaCnAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};
