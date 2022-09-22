import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, query } = context;
  //console.log(context);
  console.log(params);
  console.log(context);
  const userId = params.uid;

  return {
    props: {
      id: "userId - " + userId,
    },
  };
}
