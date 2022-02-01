import React, { useState } from 'react';

import { IonSearchbar } from '@ionic/react';

const Map = () => {
  const [searchText, setSearchText] = useState('')
  return (
    <div>
      <IonSearchbar
        debounce={250}
        inputMode="search"
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        showCancelButton="never"
      ></IonSearchbar>
    </div>
  )
}

export default Map
