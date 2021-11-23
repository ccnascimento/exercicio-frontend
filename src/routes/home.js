import React from "react";
import Highlighted from "../components/Highlighted";
import LatestProjects from "../components/LatestProjects";

const HIGHLIGHTED = 1;

export default function Home() {
  return (
    <div className="col-span-2">
      <div className="box">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          libero ipsam, assumenda sequi fuga quod odio voluptatem temporibus.
          Fugit, delectus? Sapiente hic delectus temporibus officiis ex, illum
          ab. Exercitationem, obcaecati?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          laboriosam asperiores explicabo possimus reiciendis doloremque id
          debitis ad cumque blanditiis numquam quibusdam, aliquam officiis porro
          commodi, hic repellat magni voluptates.
        </p>
      </div>
      <div className="box">
        <h2>Latest Projects</h2>
        <Highlighted highlightedId={HIGHLIGHTED} />
        <hr className="my-8" />
        <LatestProjects highlightedId={HIGHLIGHTED} />
      </div>
    </div>
  );
}
