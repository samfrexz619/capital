
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
        : name === 'drop' 
        ? <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#drop" />
          </svg>
        : name === 'tag'
        ? <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#tag" />
          </svg>
        : name === 'user3'
        ? <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#user1" />
          </svg>
        : name === 'user2'
        ? <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#user2" />
          </svg>
        : name === 'user1'
        ? <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#user3" />
          </svg>
        : <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#mail" />
          </svg>
      }
    </span>
   );
}
 
export default NavIcons;