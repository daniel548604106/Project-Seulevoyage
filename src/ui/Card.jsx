import classNames from 'classnames'

const Card = ({ children, className, ...props }) => (
  <div {...props} className={classNames('max-w-xl', className)}>
    <div className="dark:bg-black bg-white rounded-b-xl shadow-md">
      {children}
    </div>
  </div>
)

export default Card
