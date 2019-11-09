import React, { FunctionComponent, useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';

interface BasicInfo {
  id: string,
  name: string,
  picture:{
    data: {
      height: number,
      is_silhouette: false,
      url: string,
      width: number,
    }
  }
  short_name: string,
}

const Home: FunctionComponent = () => {
  const [ profile, setProfile ] = useState<BasicInfo>({} as BasicInfo);
  useEffect(() => {
    FB.api(
      '/me',
      'get',
      { "fields": "id,name,picture,short_name" },
      function (response: BasicInfo) {
        setProfile(response);
      }
    );
  }, []);
  return (
    <div>
      hello {profile.short_name}
    </div>
  )
};

export default MainLayout(Home);