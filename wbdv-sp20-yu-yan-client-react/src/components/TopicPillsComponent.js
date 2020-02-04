import React from "react";

class TopicPillsComponent extends React.Component {

  state = {
    active: false,
    topics: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5', 'Topic 6']
  };

  render() {
    return (
        this.state.topics.map(topic =>
            <button type="button"
                    style={{margin: '10px', padding: '10px'}}
                    className="btn btn-secondary">
              {topic}
            </button>
        )
    )
  }
}

export default TopicPillsComponent;