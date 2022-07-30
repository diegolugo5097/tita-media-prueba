const ModalComments = ({ data, isComments }) => {
  return (
    <>
      <div className="no_comments" hidden={!isComments}>
        <b>There are no comments on this post</b>
      </div>
      {data.map((comments) => {
        return (
          <>
            <div className="comments">
              <div className="comment_message">
                <img
                  id="image_profile"
                  src={comments.owner.picture}
                  alt={comments.message}
                />
                <h6>
                  {comments.owner.firstName} {comments.owner.lastName}
                </h6>
                <span>{comments.message}</span>
                <h6>{comments.publishDate}</h6>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ModalComments;
