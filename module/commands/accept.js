module.exports.config = {
  name: "accept",
  version: "1.0.0",
  prefix: true,
  permission: 0,
  credits: "Earfun",
  description: "Accept friend request if sent to the bot",
  category: "admin",
  usages: "/accept",
  cooldowns: 0
};

module.exports.run = async ({ event, api }) => {
  try {
    const senderID = event.senderID;

    // Fetch friend request list
    const form = {
      av: api.getCurrentUserID(),
      fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
      fb_api_caller_class: "RelayModern",
      doc_id: "100077406166832",
      variables: JSON.stringify({ input: { scale: 3 } }),
    };

    const response = await api.httpPost("https://www.facebook.com/api/graphql/", form);
    const listRequest = JSON.parse(response).data.viewer.friending_possibilities.edges;

    // Check if the sender has sent a friend request
    const userRequest = listRequest.find((req) => req.node.id === senderID);

    if (!userRequest) {
      // No friend request found
      return api.sendMessage(
        "তোমার ফ্রেন্ড রিকোয়েস্ট পাওয়া যায়নি। আগে ফ্রেন্ড রিকোয়েস্ট পাঠাও।",
        event.threadID,
        event.messageID
      );
    }

    // Accept the friend request
    const acceptForm = {
      av: api.getCurrentUserID(),
      fb_api_caller_class: "RelayModern",
      fb_api_req_friendly_name: "FriendingCometFriendRequestConfirmMutation",
      doc_id: "3147613905362928",
      variables: JSON.stringify({
        input: {
          source: "friends_tab",
          actor_id: api.getCurrentUserID(),
          friend_requester_id: senderID,
          client_mutation_id: Math.round(Math.random() * 19).toString(),
        },
      }),
    };

    const result = await api.httpPost("https://www.facebook.com/api/graphql/", acceptForm);

    if (JSON.parse(result).errors) {
      return api.sendMessage(
        "তোমার ফ্রেন্ড রিকোয়েস্ট সফলভাবে গ্রহণ করা হয়েছে।",
        event.threadID,
        event.messageID
      );
    }

    // Send success message
    api.sendMessage(
      `তোমার ফ্রেন্ড রিকোয়েস্ট সফলভাবে গ্রহণ করা হয়েছে।`,
      event.threadID,
      event.messageID
    );
  } catch (error) {
    console.error(error);
    api.sendMessage(
      "ফ্রেন্ড রিকোয়েস্ট চেক করার সময় ত্রুটি ঘটেছে।",
      event.threadID,
      event.messageID
    );
  }
};
