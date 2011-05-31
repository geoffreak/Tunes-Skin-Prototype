<?php
ini_set('display_errors', 0);
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" ); 
header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" ); 
header("Cache-Control: no-cache, must-revalidate" ); 
header("Pragma: no-cache" );
header("Content-type: application/json");

$json['navigation'] = array(
	'personal'		=> array(
		'title'			=> 'Personal',
		'elements'		=> array(
			'profile'			=> array(
				'title' 			=> 'My Profile',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'personal-main'
			),
			'mylist'			=> array(
				'title' 			=> 'My List',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'personal-mylist'
			),
			'myrecs'			=> array(
				'title' 			=> 'My Recommendations',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'personal-myrecs'
			),
			'myclubs'			=> array(
				'title' 			=> 'My Clubs',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'personal-myclubs'
			),
			'myblog'			=> array(
				'title' 			=> 'My Blog',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'personal-myclubs'
			),
			'settings'			=> array(
				'title' 			=> 'Settings',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'personal-settings'
			),
		)
	),
	'news'		=> array(
		'title'			=> 'News',
		'elements'		=> array(
			'profile'			=> array(
				'title' 			=> 'Latest News',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'news-latest'
			),
			'announcements'		=> array(
				'title' 			=> 'Announcements',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'news-announcements'
			),
			'editorials'		=> array(
				'title' 			=> 'Editorials',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'news-editorials'
			),
			'polls'				=> array(
				'title' 			=> 'Polls',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'news-polls'
			),
		)
	),
	'community'		=> array(
		'title'			=> 'Community',
		'elements'		=> array(
			'forums'			=> array(
				'title' 			=> 'Forums',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'community-forums'
			),
			'blogs'				=> array(
				'title' 			=> 'Blogs',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'community-blogs'
			),
			'chat'				=> array(
				'title' 			=> 'Chat',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'community-chat'
			),
			'clubs'				=> array(
				'title' 			=> 'Clubs',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'community-clubs'
			),
		)
	),
	'encyclopedia'		=> array(
		'title'				=> 'Encyclopedia',
		'elements'			=> array(
			'anime'				=> array(
				'title' 			=> 'Anime',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-anime'
			),
			'manga'				=> array(
				'title' 			=> 'Manga',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-manga'
			),
			'live_action'		=> array(
				'title' 			=> 'Live Action',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-live_action'
			),
			'people'			=> array(
				'title' 			=> 'People',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-people'
			),
			'characters'		=> array(
				'title' 			=> 'Characters',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-characters'
			),
			'companies'			=> array(
				'title' 			=> 'Companies',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-companies'
			),
			'lexicon'			=> array(
				'title' 			=> 'Lexicon',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-lexicon'
			),
			'retailers'			=> array(
				'title' 			=> 'Retailers',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-retailers'
			),
			'conventions'		=> array(
				'title' 			=> 'Conventions',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'encyclopedia-conventions'
			),
		)
	),
	'support'		=> array(
		'title'			=> 'Help and Support',
		'elements'		=> array(
			'faq'				=> array(
				'title' 			=> 'Frequently Asked Questions',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'support-faq'
			),
			'help'				=> array(
				'title' 			=> 'Help Forums',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'support-help'
			),
			'bugs'				=> array(
				'title' 			=> 'Bug Tracker',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'support-bugs'
			),
			'features'			=> array(
				'title' 			=> 'Feature Tracker',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'support-features'
			),
		)
	),
	'admin'			=> array(
		'title'			=> 'Administration',
		'elements'		=> array(
			'news'				=> array(
				'title' 			=> 'News',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'admin-news'
			),
			'users'				=> array(
				'title' 			=> 'Users',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'admin-users'
			),
			'forums'			=> array(
				'title' 			=> 'Forums',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'admin-forums'
			),
			'encyclopedia'		=> array(
				'title' 			=> 'Encyclopedia',
				'icon'				=> 'pics/testicon.png',
				'callback'			=> '',
				'code_format_id'	=> 'admin-encyclopedia'
			),
		)
	),
);
print json_encode($json);
?>