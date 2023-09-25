
interface Prop {
  name: string;
}

const NavIcons = ({ name }: Prop) => {
  return ( 
    <span>
      {
        name === 'home'
        ? <svg width="38" height="24" viewBox="0 0 38 24" style={{marginLeft: '13px'}}>
            <use xlinkHref="/sprite.svg#home" />
          </svg>
        : name === 'team'
        ? <svg width="48" height="48" viewBox="0 0 48 48">
            <use xlinkHref="/sprite.svg#team" />
          </svg>
        : name === 'task'
        ? <svg width="48" height="48" viewBox="0 0 48 48">
            <use xlinkHref="/sprite.svg#task" />
          </svg>
        : name === 'share'
        ? <svg width="48" height="48" viewBox="0 0 48 48">
            <use xlinkHref="/sprite.svg#share" />
          </svg>
        : name === 'documents'
        ? <svg width="48" height="48" viewBox="0 0 48 48">
            <use xlinkHref="/sprite.svg#doc" />
          </svg>
        : name === 'notes' 
        ? <svg width="48" height="48" viewBox="0 0 48 48">
            <use xlinkHref="/sprite.svg#note" />
          </svg>
        : name === 'favorite'
        ? <svg width="48" height="48" viewBox="0 0 48 48">
            <use xlinkHref="/sprite.svg#like" />
          </svg>
        : <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#drop" />
          </svg>
      }
    </span>
   );
}
 
export default NavIcons;