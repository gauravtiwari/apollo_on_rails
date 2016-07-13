import React from 'react';
import PostQuery from './postQuery';
import { connect } from 'react-apollo';

import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

import Divider from 'material-ui/Divider';
import Colors from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const commentStyle = {
  marginTop: '20px',
};

const titleStyle = {
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 0.541176)',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '48px',
  width: '100%',
};

class PostsShowComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  }


  render() {
    const { data } = this.props;
    let postPreview;
    let comments;

    if (data.loading) {
      postPreview = "Loading...";
    } else {
      postPreview = <Card>
                      <CardTitle
                        title={data.post.title}
                        subtitle={data.post.user.name}
                      />
                      <CardText>
                        {data.post.body}
                      </CardText>
                    </Card>;
      comments = data.post.comments.map((comment) => {

      return <Card key={comment.id} style={commentStyle}>
                <CardHeader
                  title={comment.user.name}
                  subtitle={`Posted: ${comment.created_at}`}
                />
                <CardText>
                  {comment.body}
                </CardText>
              </Card>;
      });
    }

    return(
      <div className="postsShow">
        {postPreview}
        <Divider inset={true} />
        <h1 style={titleStyle}>Recent Comments</h1>
        <div>
          {comments}
        </div>
      </div>
    );
  }
}

PostsShowComponent.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


function mapQueriesToProps({ ownProps, state }) {
  return {
    data: new PostQuery({id: ownProps.post.id}),
  };
};

const PostWithData = connect({
  mapQueriesToProps,
})(PostsShowComponent);

export default PostWithData;
