package ca.mcgill.ecse321.gallerysystem.service;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.stubbing.Answer;
import ca.mcgill.ecse321.gallerysystem.dao.ArtistRepository;
import ca.mcgill.ecse321.gallerysystem.dao.UserRepository;
import ca.mcgill.ecse321.gallerysystem.model.Artist;
import ca.mcgill.ecse321.gallerysystem.model.User;

@ExtendWith(MockitoExtension.class)
public class TestCreateArtist {
    @Mock
	private ArtistRepository artistDao;
	@Mock
	private UserRepository userDao;
	
	@InjectMocks
	private GallerySystemService service;
	
	private static final String ARTIST_KEY = "TestArtist";
	
	@BeforeEach
	public void setMockOutput() {
		lenient().when(artistDao.findArtistByEmail(anyString())).thenAnswer((InvocationOnMock invocation) -> {
			if (invocation.getArgument(0).equals(ARTIST_KEY)) {
				Artist artist = new Artist();
				artist.setEmail(ARTIST_KEY);
				return artist;
			} else {
				return null;
			}
		});
		// Whenever anything is saved, just return the parameter object
		Answer<?> returnParameterAsAnswer = (InvocationOnMock invocation) -> {
			return invocation.getArgument(0);
		};
		lenient().when(artistDao.save(any(Artist.class))).thenAnswer(returnParameterAsAnswer);
		lenient().when(userDao.save(any(User.class))).thenAnswer(returnParameterAsAnswer);
	}
	
	/**
	 * Test to create a valid artist with valid username, email, and password. 
	 */
    @Test
	public void testCreateArtist() {
		assertEquals(0, service.getAllArtists().size());
		
		String userName = "John";
		String email = "john@mail.com";
		String password = "pass";
		Artist artist = null;
		try {
			artist = service.createArtist(userName, email, password);
		}catch (IllegalArgumentException e) {
			fail();
		}
		checkResultCreateArtist(artist, userName, email, password);
	}
	
	
	/** 
	 * Checks the resulf of testCreatArtist by checking that the name of the created artist corresponds to the 
	 * given input provided in the parameters below. 
	 * 
	 * @param artist The artist object which the test would be performed on. 
	 * @param userName	The username to be used to check the validity of the artist.
	 * @param email	The email address to be used to check the validity of the artist.
	 * @param password	The password to be used to check the validity of the artist.
	 */
	private void checkResultCreateArtist(Artist artist, String userName, String email, String password) {
		assertNotNull(artist);
		assertEquals(userName, artist.getUserName());
		assertEquals(email, artist.getEmail());
		assertEquals(password, artist.getPassword());
	}
	
	/**
	 * Test to create a artist with information set to Null and see if the 
	 * service class will handle this exception properly. It should not create any artist
	 * and throw a message "Invalid Input!"
	 */
	@Test
	public void testCreateArtistNull() {
		assertEquals(0, service.getAllArtists().size());
		String error = null;
		String userName = null;
		String email = null;
		String password = null;
		Artist artist = null;
		try {
			artist = service.createArtist(userName, email, password);
		} catch (IllegalArgumentException e) {
			error = e.getMessage();
		}
		assertNull(artist);
		assertEquals("Invalid Input!", error);
	}
	
	/**
	 * Test to create two artists with the same email (valid case).
	 */
	@Test
	public void testCreate2ArtistSameEmail() {
		assertEquals(0, service.getAllArtists().size());
		
		String userName = "John";
		String userName2 = "Adam";
		String email = "john@mail.com";
		String password = "pass";
		Artist artist = null;
		Artist artist2 = null;
		artist = service.createArtist(userName, email, password);
		artist2 = service.createArtist(userName2, email, password);
		checkResultCreateArtist(artist, userName, email, password);
		checkResultCreateArtist(artist2, userName2, email, password);
	}
}
