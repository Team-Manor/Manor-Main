// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract Coterie is Initializable, PausableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    uint256 public postId;
    uint256 public commentId;
   

    mapping(uint256 => Post) public posts;
    mapping(uint256 => Comment) public comments;

    struct Post {
        uint256 postId;
        string content;
        string image;
        address author;
        uint256 likes;
        uint256 commentCount;
        string contractAddress;
        uint40 timestamp;
        
    }

    struct Comment {
        uint256 postId;
        uint256 commentId;
        uint likes;
        string content;
        address author;
        uint40 timestamp;
    }


    event PostCreated(
        uint256 postId,
        string content,
        string image,
        address author,
        uint40 timestamp
    );

    event CommentCreated(
        uint256 postId,
        uint256 commentId,
        string content,
        address author,
        uint40 timestamp
    );

    event PostLiked(uint256 postId, address user, uint256 likes);
    event CommentLiked(uint256 commentId, address user, uint256 likes);

    function createPost(string memory _content, string memory _image, string memory _contractAddress) public whenNotPaused {
        require(bytes(_content).length > 0, "Content is required");
       
        postId++;
        posts[postId] = Post(postId, _content, _image, msg.sender, 0, 0, _contractAddress, uint40(block.timestamp));
        emit PostCreated(postId,  _content, _image, msg.sender, uint40(block.timestamp));
    }

    function createComment(uint256 _postId, string memory _content) public whenNotPaused {
         require(bytes(_content).length > 0, "Content is required");
        require(_postId > 0 && _postId <= postId, "Invalid post id");
        commentId++;
        comments[commentId] = Comment(_postId, commentId, 0, _content, msg.sender, uint40(block.timestamp));
        posts[_postId].commentCount++;
        emit CommentCreated(_postId, commentId, _content, msg.sender, uint40(block.timestamp));
    }

    function likePost(uint256 _postId) public whenNotPaused {
        require(_postId > 0 && _postId <= postId, "Invalid post id");
        posts[_postId].likes++;
        emit PostLiked(_postId, msg.sender, posts[_postId].likes);
    }

    function likeComment(uint256 _commentId) public whenNotPaused {
        require(_commentId > 0 && _commentId <= commentId, "Invalid comment id");
        comments[_commentId].likes++;
        emit CommentLiked(_commentId, msg.sender, comments[_commentId].likes);
    }

    function getAllPosts() public view returns (Post[] memory) {
        Post[] memory _posts = new Post[](postId);
        for (uint256 i = 1; i <= postId; i++) {
            _posts[i - 1] = posts[i];
        }
        return _posts;
    }

    function getPostComments(uint256 _postId) public view returns (Comment[] memory) {
        require(_postId > 0 && _postId <= postId, "Invalid post id");
        Comment[] memory _comments = new Comment[](posts[_postId].commentCount);
        uint256 counter = 0;
        for (uint256 i = 1; i <= commentId; i++) {
            if (comments[i].postId == _postId) {
                _comments[counter] = comments[i];
                counter++;
            }
        }
        return _comments;
    }



    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}
}