import React from "react";
import Header from "../../components/layout/Header";
import {UserProps} from "@/interfaces";
import {address} from "@/interfaces";
import {geo} from "@/interfaces";
import {company} from "@/interfaces";
const Users: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address: { city },
  company: { name: companyName },
}) => {
  return <div></div>;
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;
