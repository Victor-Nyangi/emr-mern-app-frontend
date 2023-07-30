import React from 'react'
import {
    useQuery,
    useMutation,
    gql,
} from "@apollo/client";

const GET_MESSAGES = gql`
query {
    messages {
      id
      content
      user
    }
}
`;

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const Messages = ({ user }) => {
    // const { data } = useSubscription(GET_MESSAGES);

    const { data } = useQuery(GET_MESSAGES);
    if (!data) {
        return null;
    }

    return (
        <>
            {data.messages.map(({ id, user: messageUser, content }) => (
                <div key={id}
                    style={{
                        display: "flex",
                        justifyContent: user === messageUser ? "flex-end" : "flex-start",
                        paddingBottom: "1em",
                    }}
                >
                    {user !== messageUser && (
                        <div
                            style={{
                                height: 50,
                                width: 50,
                                marginRight: "0.5em",
                                border: "2px solid #e5e6ea",
                                borderRadius: 25,
                                textAlign: "center",
                                fontSize: "18pt",
                                paddingTop: 5,
                            }}
                        >
                            {messageUser.slice(0, 2).toUpperCase()}
                        </div>
                    )}
                    <div
                        style={{
                            background: user === messageUser ? "blue" : "#e5e6ea",
                            color: user === messageUser ? "white" : "black",
                            padding: "1em",
                            borderRadius: "1em",
                            maxWidth: "60%",
                        }}
                    >
                        {content}
                    </div>
                </div>
            ))}
        </>
    );
};

const Board = () => {
    const [chatstate, chatstateSet] = React.useState({
        user: "Jack",
        content: "",
    });
    const [postMessage] = useMutation(POST_MESSAGE);

    const onSend = () => {
        if (chatstate.content.length > 0) {
            postMessage({
                variables: chatstate,
            });
        }
        chatstateSet({
            ...chatstate,
            content: "",
        });
    };
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b">
                    <span className="flex title-font ml-3 text-xl font-bold items-center text-blue-600 mb-4 md:mb-0">
                        Manager Dashboard
                    </span>
                </div>
            </header>
            <div className="max-w-full my-4">
                <header className="bg-blue-700 rounded text-white flex py-2 px-4 align-center justify-between">
                    <span className='align-center mt-2'>LifeOfHealth Chat</span>
                    <a id="leave-btn" className="btn bg-white rounded text-red-600 font-semibold p-2 hover:bg-black" href="!#">Leave Room</a>
                </header>
                <main className="grid grid-cols-7 my-4">
                    <div className="col-span-2">

                        <div className="mb-4 mr-4">
                            <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                <div className="flex items-center p-4 justify-between">
                                    <p className="font-bold text-md text-black dark:text-white">
                                        Room Name:
                                    </p>
                                    <span className="text-sm text-green-600 mr-4">
                                        6
                                    </span>
                                </div>
                                <div className="py-2 px-4 bg-blue-100 dark:bg-gray-800 text-gray-600 border-l-4 border-blue-500 flex items-center justify-between">
                                    <p className="text-xs flex items-center dark:text-white">
                                        <svg width="20" height="20" fill="currentColor" className="text-blue-500 mr-2" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                </path>
                                            </g>
                                        </svg>
                                        Create wireframe
                                    </p>
                                    <div className="flex items-center">
                                        <span className="font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4">
                                            25 min 20s
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 justify-between border-b-2 border-gray-100">
                                    <p className="font-bold text-md text-black dark:text-white">
                                        Room Name
                                    </p>
                                    <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                            <g fill="none">
                                                <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                                    <p className="text-xs flex items-center dark:text-white">
                                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                </path>
                                            </g>
                                        </svg>
                                        International
                                    </p>
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                            30 min
                                        </span>
                                        <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                <g fill="none">
                                                    <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                                    <p className="text-xs flex items-center dark:text-white">
                                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                </path>
                                            </g>
                                        </svg>
                                        Slack logo design
                                    </p>
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                            30 min
                                        </span>
                                        <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                <g fill="none">
                                                    <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="py-2 px-4 text-gray-600 flex items-center justify-between">
                                    <p className="text-xs flex items-center dark:text-white">
                                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                </path>
                                            </g>
                                        </svg>
                                        Dahboard template
                                    </p>
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                            30 min
                                        </span>
                                        <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                <g fill="none">
                                                    <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="chat-messages col-span-5">
                        <Messages user={chatstate.user} />
                    </div>
                </main>
                <section className='py-4 grid grid-cols-12 gap-4'>
                    <select name="username" placeholder="User" className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" required value={chatstate.user}
                        onChange={(evt) =>
                            chatstateSet({
                                ...chatstate,
                                user: evt.target.value,
                            })} >
                                <option value="Jack">Jack</option>
                                <option value="Mary">Mary</option>

                                </select>

                    <input name="message" value={chatstate.content}
                        onChange={(evt) =>
                            chatstateSet({
                                ...chatstate,
                                content: evt.target.value,
                            })
                        }
                        onKeyUp={(evt) => {
                            if (evt.key === 'Enter') {
                                onSend();
                            }
                        }} placeholder="..." className="col-span-9 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" required />

                    <button className="btn bg-black text-white rounded px-6 col-span-1" onClick={() => onSend()}><i className="fas fa-paper-plane"></i> Send</button>
                </section>
            </div>


            {/* <div className="flex flex-col flex-wrap sm:flex-row ">
    <div className="w-full">

        <div className="mb-4">
            <div className="shadow-lg rounded-2xl py-4 bg-white w-full">
                <p className="font-bold text-md text-black ml-2 mb-6">
                    Messages
                </p>
                <ul className='p-4 rounded'>
                    <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="block relative">
                            <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-900 font-semibold ml-2">
                                Charlie Rabiller
                            </span>
                            <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                Hey John ! Do you read the NextJS doc ?
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="block relative">
                            <img alt="profil" src="/images/person/5.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-900 font-semibold ml-2">
                                Marie Lou
                            </span>
                            <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                No I think the dog is better...
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="block relative">
                            <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                Ivan Buck
                            </span>
                            <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                Seriously ? haha Bob is not a child !
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="block relative">
                            <img alt="profil" src="/images/person/7.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                Marina Farga
                            </span>
                            <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                Do you need that design ?
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div> */}



        </>
    )
}

export default Board