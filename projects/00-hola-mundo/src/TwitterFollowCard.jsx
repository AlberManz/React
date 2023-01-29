export function TwitterFollowCard({ children, formatUserName, userName, isFollowing = false }) {

  return (
    <div>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            src={`https://unavatar.io/${userName}`}
            alt="Avatar de perro" />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span
              className='tw-followCard-infoUserName'>{formatUserName(userName)}
            </span>
          </div>
        </header>

        <aside>
          <button className='tw-followCard-button'>
            Seguir
          </button>
        </aside>
      </article>
    </div >
  )
}