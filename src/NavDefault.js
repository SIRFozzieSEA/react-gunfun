function NavDefault() {
	return (
		<table class="table-nav">

			<tr>
				<td colspan="2"><a class="nav-bold-header" href="/" target="_top">GunFun</a></td>
			</tr>
			<tr>
				<td class="nav-bold-sub-header" colspan="2">Registry</td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/registry" target="main">Registry</a> (<a href="/registry_add" target="main">Add</a>)</td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/registry_search" target="main">Search Registry</a></td>
			</tr>


			<tr>
				<td class="nav-bold-sub-header" colspan="2">Logs</td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/log/ammo" target="main">Ammo</a> (<a href="/log/ammo_add" target="main">Add</a>)</td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/log/carry" target="main">Carry</a> (<a href="/log/carry_add" target="main">Add</a>)</td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/log/cleaning" target="main">Cleaning</a> (<a href="/log/cleaning_add?dirtyOnly=true" target="main">Dirty</a>/<a href="/log/cleaning_add?dirtyOnly=false" target="main">All</a>)</td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/log/shot" target="main">Shot</a> (<a href="/log/shot_add" target="main">Add</a>)</td>
			</tr>


			<tr>
				<td class="nav-bold-sub-header" colspan="2">Reports</td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/report/ammo" target="main">Ammo</a></td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/report/carry" target="main">Carry</a></td>
			</tr>

			<tr>
				<td>•</td>
				<td><a href="/report/cleaning" target="main">Cleaning</a></td>
			</tr>
			<tr>
				<td>•</td>
				<td><a href="/report/shot" target="main">Shot</a></td>
			</tr>
			<tr>
				<td>•</td>
				<td><a href="/report/shotbycaliber" target="main">Shot by Caliber</a></td>
			</tr>
			<tr>
				<td>•</td>
				<td><a href="/report/market_report" target="main">Market</a> (<a href="/market/market_update" target="main">Update</a>)</td>
			</tr>

			<tr>
				<td class="nav-bold-sub-header" colspan="2">Functions</td>
			</tr>
			<tr>
				<td>•</td>
				<td><a href="/function/backup?what=ALL" target="main">Backup</a> (<a href="/function/backup?what=SQL" title="SQL Data" target="main">S</a>/<a href="/function/backup?what=IMAGES" title="Images" target="main">I</a>/<a href="/function/backup?what=MANUALS" title="Manuals" target="main">M</a>/<a href="/function/backup?what=PROPERTIES" title="Properties" target="main">P</a>/<a href="/function/backup?what=TAB" title="Tab Data" target="main">T</a>)</td>
			</tr>
			<tr>
				<td>•</td>
				<td><a href="/function/maintenance" target="main">Maintenance</a></td>
			</tr>
			<tr>
				<td>•</td>
				<td><a href="/h2-console" target="main">H2 Console</a></td>
			</tr>

			<tr>
				<td class="nav-bold-sub-header" colspan="2"><a class="nav-bold-sub-header" href="/quiz/start" target="main">Quiz</a></td>
			</tr>


		</table>

	);
}

export default NavDefault;