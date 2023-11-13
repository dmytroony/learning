import Avatar from '@/app/components/Avatar';

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <>
      <Card>
        <Avatar
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
          }}
          size={100}
        />
        <h2 style={{float: "right"}}>
          Katsuko Saruhashi
        </h2>
        <ul style={{listStyleType: "none",}}>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </Card>
      <Card>
        <Avatar
          person={{
            name: 'Aklilu Lemma',
            imageId: 'OKS67lh',
          }}
          size={80}
        />
        <span style={{float: "right"}}>
          Aklilu Lemma
        </span>
      </Card>
      <Card>
        <Avatar
          person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6',
          }}
          size={60}
        />
        <span style={{float: "right"}}>
          Lin Lanying
        </span>
      </Card>
    </>
  );
}