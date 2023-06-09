import { Suspense } from 'react';

import {  useNavigate, useParams } from 'react-router-dom';

import { formatBySeparator } from '@core/utils/number';

import { Borders } from '@features/country/components/Borders';
import { useItemQuery } from '@features/country/hooks/useQuery';
import { Button, ArrowBackOutlineIcon, NoData, Image, Spinner } from '@features/ui';

import * as UI from './styles';

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useItemQuery({
    name: id as string,
    fields: ['region', 'flags', 'name', 'population', 'capital', 'subregion', 'tld', 'currencies', 'languages', 'borders'],
  });

  if (!data) return <NoData/>;

  const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = data;

  return (
    <>
      <Button Icon={ArrowBackOutlineIcon} onClick={() => navigate(-1)}>
        Back
      </Button>
      <UI.Container>
        <Image alt={flags.alt} key={flags.alt} src={flags.svg}/>
        <UI.Content>
          <UI.Title>
            {name.common}
          </UI.Title>
          <UI.Grid>
            <UI.Column>
              <UI.Item
                label="Native Name"
                value={Object.keys(name.nativeName).map(key => name.nativeName[key].common).join(', ')}
              />
              <UI.Item label="Population" value={formatBySeparator(population)}/>
              <UI.Item label="Region" value={region}/>
              <UI.Item label="Sub region" value={subregion}/>
              <UI.Item label="Capital" value={capital.join(', ')}/>
            </UI.Column>
            <UI.Column>
              <UI.Item label="Top Level Domain" value={tld.join(', ')}/>
              <UI.Item label="Currencies" value={Object.keys(currencies).map(key => currencies[key].name).join(', ')}/>
              <UI.Item label="Languages" value={Object.keys(languages).map(key => languages[key]).join(', ')}/>
            </UI.Column>
          </UI.Grid>
          <UI.Footer>
            <Suspense fallback={<Spinner/>}>
              <Borders codes={borders} onClick={navigate}/>
            </Suspense>
          </UI.Footer>
        </UI.Content>
      </UI.Container>
    </>
  );
};
