import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getAll } from 'shared/api/jsonplaceholder';
import css from './List.module.css';

export const List = () => {
  const [users, setUsers] = useState([]);
  const {
    isLoading,
    data: response,
    error,
    refetch,
  } = useQuery('users list', () => getAll(), {
    onSuccess: ({ data }) => {
      // console.log(data);
      setUsers(data);
    },
    onError: error => {
      alert(error.messsage);
    },
    // enabled: true,
    // select: ({ data }) => {
    //   console.log(data);
    //   return data.map(user => {
    //     return {
    //       ...user,
    //       name: user.name + 'Change',
    //     };
    //   });
    // },
  });

  console.log(users);

  return (
    <div className={css.Wrapper}>
      {isLoading && <p style={{ fontSize: '22px' }}>Loading</p>}
      {error && <h2>Eror: {error.messsage}</h2>}
      <ul className={css.list}>
        {users?.map(user => (
          <li className={css.item} key={user.id}>
            <h2 className={css.title}>Name: {user.name}</h2>
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Fetch Data</button>
    </div>
  );
};
