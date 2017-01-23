<?php

class PlayerState
{
	private $store;

	public function __construct()
	{
		$this->store = &$_SESSION;

		// Test, czy sesja jest już utworzona
		if (isset($this->store['hp']))
			return;

		// Tworzenie domyślnego profilu gracza
		$this->reset();
	}

	public function reset()
	{
		$this->store['hp'] = 100;
		$this->store['kasa'] = 0;
		$this->store['itemki'] = array();
		$this->store['room'] = '';
	}

	public function getHealth()
	{
		return $this->store['hp'];
	}

	public function setHealth($hp)
	{
		$this->store['hp'] = $hp;
	}

	public function getMoney()
	{
		return $this->store['kasa'];
	}

	public function setMoney($val)
	{
		$this->store['kasa'] = $val;
	}

	public function listItems()
	{
		$list = '';

		foreach ($this->store['itemki'] as $nid)
		{
			$node = node_load($nid);

			if (!$node)
				continue;

			// Przedmiot jest niewidoczny
			if ($node->gameitem_visibility['und'][0]['value'] == 0)
				continue;

			// Dopisanie do listy
			$list .= $node->title;
			$list .= '; ';
		}

		return $list;
	}

	public function findItem($nid)
	{
		foreach ($this->store['itemki'] as $item)
			if ($item == $nid)
				return TRUE;

		return FALSE;
	}

	public function addItem($nid)
	{
		$this->store['itemki'][] = $nid;
	}

	public function removeItem($nid)
	{
		$deleted = FALSE;
		$arr = array();

		foreach ($this->store['itemki'] as $it)
			if ($it == $nid && !$deleted)
				$deleted = TRUE;
			else
				$arr[] = $it;

		$this->store['itemki'] = $arr;
	}

	public function setRoom($room)
	{
		$this->store['room'] = $room;
	}

	public function getRoom()
	{
		return $this->store['room'];
	}
}
