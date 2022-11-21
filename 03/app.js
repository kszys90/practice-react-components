import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: ['Przykładowy komentarz nr 1', 'Przykładowy komentarz nr 2'],
        newComment: ''
    }
    contentChange = e => {
        this.setState({
            newComment: e.target.value
        })
    }
    commentSubmit = e => {
        e.preventDefault()
        const { newComment } = this.state
        if (this.state.newComment !== '') {
            console.log('Comment submit')
            this.addComment(newComment)
            this.state.newComment = ''
        }
        else {
            console.log('Type something!')
        }
    }
    renderComments() {
        const { comments } = this.state
        return (
            comments.map(comment => {
                return <li>{comment}</li>
            })
        )
    }
    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment],
        })
    }
    render() {
        const { title, body } = this.props;
        const { newComment } = this.state
        return (
            <article>
                <h1>{title}</h1>
                <p>{body}</p>
                <section>
                    <form
                        onSubmit={this.commentSubmit}
                    >
                        <div>
                            <label>
                                <textarea
                                    style={{ "minWidth": "300px", "minHeight": "120px" }}
                                    name="content"
                                    value={newComment}
                                    onChange={this.contentChange}
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderComments()}
                    </ul>
                </section>
            </article>
        )
    }
}

root.render(
    <Article
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
